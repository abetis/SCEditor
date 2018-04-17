/**
 * SCEditor Inline-Code Plugin for BBCode format
 * http://www.sceditor.com/
 *
 * Copyright (C) 2011-2013, Sam Clarke (samclarke.com)
 *
 * SCEditor is licensed under the MIT license:
 *	http://www.opensource.org/licenses/mit-license.php
 *
 * @fileoverview SCEditor Video plugin
 * This plugin replaces the youtube command with "add video" command, which
 * will recognize youtube and facebook URLs (hopefully other URLs as well
 * in the future) and generate the tags accordingly
 * @author Alex Betis
 */

(function (sceditor) {
	'use strict';

	sceditor.plugins.products = function () {
		var base = this;

		var dom = sceditor.dom;

		/**
		 * Private functions
		 * @private
		 */
		var productHandler;
		var productsListHandler;
		var productHtml;

		base.init = function () {
			var opts = this.opts;

			// Enable for BBCode only
			if (opts.format && opts.format !== 'bbcode') {
				return;
			}

			// Add new commands
			sceditor.command.set('product', {
				exec: productHandler,
				txtExec: productHandler,
				tooltip: 'Insert single product'
			});

			sceditor.command.set('productslist', {
				exec: productsListHandler,
				txtExec: productsListHandler,
				tooltip: 'Insert list of products'
			});

			// Add new formats
			sceditor.formats.bbcode.set('product', {
				tags: {
					img: {
						'data-product-sku': null
					}
				},
				format: function (element, content) {
					var sku = dom.attr(element, 'data-product-sku');

					return sku ? '[product]' + sku + '[/product]' : content;
				},
				html: function (token, attrs, content) {
					return productHtml(content);
				}
			});

			sceditor.formats.bbcode.set('productslist', {
				tags: {
					span: {
						'data-productslist': null
					}
				},
				format: '[productslist]{0}[/productslist]',
				html: function (token, attrs, content) {
					return '<span data-productslist="1" ' +
					'style="border:1px dashed red; ' +
					'display:block; padding:3px;" />' +
					content +
					'</span>';
				}
			});

			sceditor.formats.bbcode.set('span', {
				tags: {
					span: null
				},
				isInline: true,
				allowedChildren: ['#', 'img'],
				format: function (element, content) {
					return content;
				},
				html: function (token, attrs, content) {
					return content;
				}
			});
		};

		productHtml = function (sku) {
			return '<img src="#" ' +
			'data-product-sku="' + sku + '" width="170" height="50" ' +
			'alt="Product #' + sku + '" ' +
			'style="border:1px solid blue; display:block; ' +
			'width:170px; height:50px" />';
		};

		/**
		 * Function for the txtExec and exec properties
		 *
		 * @param  {node} caller
		 * @private
		 */
		productHandler = function (caller) {
			var editor = this;
			var content = document.createElement('div');

			var div;
			var label;
			var input;
			var button;

			div = document.createElement('div');
			label = document.createElement('label');
			label.setAttribute('for', 'sku');
			label.textContent = editor._('Product SKU:');
			input = document.createElement('input');
			input.type = 'text';
			input.id = 'sku';
			input.dir = 'ltr';
			input.placeholder = '123456';
			div.appendChild(label);
			div.appendChild(input);

			content.appendChild(div);

			div = document.createElement('div');
			button = document.createElement('input');
			button.type = 'button';
			button.className = 'button';
			button.value = editor._('Insert');
			div.appendChild(button);

			content.appendChild(div);

			button.addEventListener('click', function (e) {
				var sku = input.value.replace(/\D+/g, '');

				if (editor.sourceMode()) {
					editor.insertText('[product]' + sku + '[/product]');
				} else {
					editor.wysiwygEditorInsertHtml(productHtml(sku));
				}

				editor.closeDropDown(true);
				e.preventDefault();
			});

			editor.createDropDown(caller, 'insertlink', content);
		};

		productsListHandler = function () {
			var editor = this;

			if (editor.sourceMode()) {
				editor.sourceEditorInsertText('[productslist]',
					'[/productslist]');
			} else {
				editor.wysiwygEditorInsertHtml(
					'<span data-productslist="1" ' +
					'style="border:1px dashed red; ' +
					'display:block; padding:3px;" />',
					'</span>');
			}
		};
	};
})(sceditor);
