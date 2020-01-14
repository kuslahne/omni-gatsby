import React from 'react';
import { CSSReset } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import styles from '../theme/style.css';
import publisherTheme from '../theme/theme';

const Globals = () => (
  <>
    <CSSReset />
    <Global
      styles={{
        body: {
          lineHeight: '1.625',
          color: publisherTheme.colors.text,
        },
        p: {
          marginBottom: '1.25rem',
        },
        '.entry-content a': {
          color: publisherTheme.colors.links,
          textDecoration: 'none',
        },
        'h1, h2, h3, h4, h5': {
          fontWeight: '400',
          lineHeight: '1.25',
          marginBottom: '1rem',
          color: publisherTheme.colors.headings,
        },
        '.entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4, .entry-content h5': {
          marginBottom: '2rem',
          marginTop: '2rem',
        },
        h1: {
          fontSize: '3rem',
          fontWeight: '500',
        },
        h2: {
          fontSize: '2.5rem',
          fontWeight: '500',
        },
        h3: {
          fontSize: '1.875rem',
        },
        h4: {
          fontSize: '1.2rem',
          textTransform: 'uppercase',
        },
        h5: {
          fontSize: '1rem',
        },
        'ul, ol': {
          paddingLeft: '1.5rem',
          marginLeft: '1.5rem',
          marginBottom: '.75rem',
        },
        'ul li, ol li': {
          paddingLeft: '.5rem',
          marginBottom: '.5rem',
        },
        'ul ul, ol ol, ul ul ul, ol ol ol': {
          marginLeft: '0',
          marginTop: '10px',
        },
        iframe: {
          width: '100%',
        },
        '.screen-reader-text': {
          position: 'absolute',
          left: '-10000px',
          top: 'auto',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        },
        '.entry-content img.aligncenter, .entry-content .aligncenter img': {
          display: 'block',
          margin: '0 auto',
        },
        '.entry-content img, .entry-content figure, .entry-content picture': {
          maxWidth: '100%',
        },
        '.aligncenter': {
          textAlign: 'center',
        },
        '.alignleft': {
          float: 'left',
          marginRight: '15px',
        },
        '.alignright': {
          float: 'right',
          marginLeft: '15px',
        },
        '.entry-content img, hr, figure': {
          marginBottom: '15px',
        },
        figcaption: {
          textAlign: 'center',
          fontSize: '12px',
          color: '#999',
        },
        blockquote: {
          paddingLeft: '15px',
          borderLeft: '4px solid #ccc',
          fontFamily: 'Georgia, Times, serif',
          fontSize: '18px',
          fontStyle: 'italic',
          opacity: '.8',
          marginBottom: '15px',
        },
        'code, pre': {
          wordBreak: 'break-word',
          overflow: 'scroll',
          marginBottom: '15px',
        },
        'code, .wp-block-code': {
          backgroundColor: '#333',
          color: '#eee',
          overflow: 'scroll',
          borderRadius: '3px',
          padding: '10px',
          fontFamily: "Menlo, Monaco, Consolas, 'Courier New', monospace",
          display: 'block',
          marginBottom: '15px',
        },
        audio: {
          width: '100%',
        },
        '.wp-block-button a': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: 'none',
          textDecoration: 'none',
          appearance: 'none',
          WebkitAppearance: 'none',
          fontWeight: '600',
          lineHeight: '1.2',
          minWidth: '2.5rem',
          fontSize: '1rem',
          padding: '.8rem 1rem',
          borderRadius: '.25rem',
          backgroundColor: publisherTheme.colors.buttonBg,
          color: publisherTheme.colors.buttonText,
          borderBottom: 'none',
          marginBottom: '15px',
          cursor: 'pointer',
        },
        '.wp-block-cover': {
          padding: '2rem',
          color: '#eee',
          backgroundSize: 'cover',
          fontWeight: '600',
        },
        '.wp-block-gallery': {
          listStyleType: 'none',
          paddingLeft: '0',
          marginLeft: '0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gridColumnGap: '4%',
          gridRowGap: '4%',
        },
        '.wp-block-gallery li': {
          paddingLeft: '0',
        },
      }}
    />
    <style src={styles} type="text/css" />
  </>
);

export default Globals;
