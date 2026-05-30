import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';

export default function Comments() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const getTheme = (): 'light' | 'dark' =>
      document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    setTheme(getTheme());

    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Giscus
      repo="pangkyu/blog"
      repoId="R_kgDOSDcxdw"
      category="Announcements"
      categoryId="DIC_kwDOSDcxd84C-I__"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={theme}
      lang="ko"
    />
  );
}
