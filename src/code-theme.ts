// Keep the existing Rouge markup with a restrained, readable light palette.
import type { ShikiTransformer, ThemeRegistration } from 'shiki';

const green = '#48613f';
const blue = '#315b86';
const cyan = '#276454';
const gray = '#606975';
const name = '#373d45';

export const rougeTheme: ThemeRegistration = {
  name: 'rouge-solarized',
  type: 'light',
  colors: { 'editor.foreground': name, 'editor.background': '#f5f5f3' },
  tokenColors: [
    { scope: ['comment'], settings: { foreground: '#69685f' } },
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
