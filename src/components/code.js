import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React, { useState } from 'react';
import { copyToClipboard } from '../utils/copy-to-clipboard';

const Code = ({ codeString, language }) => {
  const [copy, setCopy] = useState('Copy');
  const handleClick = () => {
    copyToClipboard(codeString);
    setCopy('Copied');
    setTimeout(() => {
      setCopy('Copy');
    }, 3000);
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
          <span
            className="copy-to-clipboard"
            role="button"
            onClick={handleClick}
            onKeyDown={handleClick}
            tabIndex={0}
          >
            {copy}
          </span>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {language !== 'bash' && <span className="line-no">{i + 1}</span>}
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
