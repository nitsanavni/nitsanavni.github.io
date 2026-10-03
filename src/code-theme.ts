// Code blocks styled like the old Jekyll site: rouge markup and the
// solarized colors from src/styles/_highlights.scss.
import type { ShikiTransformer, ThemeRegistration } from 'shiki';

const green = '#859900';
const blue = '#268BD2';
const cyan = '#2AA198';
const gray = '#93A1A1';
const name = '#555555';

export const rougeTheme: ThemeRegistration = {
  name: 'rouge-solarized',
  type: 'light',
  colors: { 'editor.foreground': name, 'editor.background': '#efefef' },
  tokenColors: [
    { scope: ['comment'], settings: { foreground: '#586E75' } },
    { scope: ['keyword', 'storage.modifier', 'variable.language', 'keyword.operator'], settings: { foreground: green } },
    { scope: ['storage.type', 'support.type.primitive', 'entity.name.tag'], settings: { foreground: blue } },
    { scope: ['string', 'constant.numeric'], settings: { foreground: cyan } },
    { scope: ['punctuation', 'meta.brace', 'keyword.operator.accessor'], settings: { foreground: gray } },
    { scope: ['markup.deleted', 'markup.deleted punctuation'], settings: { foreground: cyan } },
    { scope: ['markup.inserted', 'markup.inserted punctuation'], settings: { foreground: green } },
    { scope: ['meta.diff.range'], settings: { foreground: gray } },
  ],
};

export const rougeMarkup: ShikiTransformer = {
  pre(node) {
    node.properties = { class: 'highlight' };
  },
  root(root) {
    const lang = this.options.lang;
    return {
      type: 'root',
      children: [
        {
          type: 'element',
          tagName: 'div',
          properties: { class: `language-${lang} highlighter-rouge` },
          children: [{ type: 'element', tagName: 'div', properties: { class: 'highlight' }, children: root.children as any }],
        },
      ],
    };
  },
};
