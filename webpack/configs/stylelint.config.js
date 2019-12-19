module.exports = {
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/properties-order': [
      {
        'properties' : [
          'content',
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index',
          'display',
          'float',
          'width',
          'height',
          'margin',
          'padding',
          'font',
          'font-family',
          'font-size',
          'font-style',
          'font-weight',
          'line-height',
          'color',
          'text-align',
          'background-color',
          'border',
          'border-radius',
          'opacity'
        ]
      },
    ],
    'color-hex-length': 'short',
    'string-quotes': 'single'
  }
};

