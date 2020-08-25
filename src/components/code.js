import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import { copyToClipboard } from '../utils/copy-to-clipboard';

const Code = ({ codeString, language }) => {
  const handleClick = () => {
    copyToClipboard(codeString);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <span className="copy-to-clipboard" onClick={handleClick}>
            Copy
          </span>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className="line-no">{i + 1}</span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
