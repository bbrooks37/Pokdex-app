// eslint-disable-next-line no-unused-vars
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export default function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    const metrics = ['CLS', 'FID', 'FCP', 'LCP', 'TTFB'];
    metrics.forEach((metric) => {
      const perfObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          onPerfEntry(
            entry.name,
            entry[metric]
          );
        });
      });
      perfObserver.observe({ type: metric, buffered: true });
    });
  }
}