const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// First Contentful Paint (FCP): Tempo até o primeiro conteúdo ser renderizado.
// Largest Contentful Paint (LCP): Tempo até o conteúdo mais importante ser renderizado.
// Cumulative Layout Shift (CLS): Mede a estabilidade visual da página.
// First Input Delay (FID): Tempo de resposta da aplicação após a primeira interação.
// Time to Interactive (TTI): Tempo até que a página esteja totalmente interativa.
// Time to First Byte (TTFB): Tempo entre a solicitação do pelo navegador e o primeiro byte recebido.
