import { useState } from "react";
import { BookmarkIcon } from "@radix-ui/react-icons";

const App = () => {
  const [isReloading, setIsReloading] = useState(false);

  const simulateReload = () => {
    setIsReloading(true);
    setTimeout(() => {
      setIsReloading(false);
    }, 3000);
  };

  return (
    <>
      <main>
        <h1>My news feed</h1>
        <section role="feed" aria-busy={isReloading}>
          {isReloading ? (
            <span>Reloading...</span>
          ) : (
            <>
              <div>Some ad space</div>
              <article
                aria-setsize={-1}
                tabIndex={0}
                aria-labelledby="article-1-title article-1-summary"
              >
                <h2 id="article-1-title">Test article</h2>
                <p id="article-1-summary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et tincidunt ex, egestas porttitor nulla. Sed interdum justo
                  odio, sit amet eleifend elit condimentum sit amet.
                </p>
                <button type="button" aria-label="Bookmark article">
                  <BookmarkIcon />
                </button>
              </article>
            </>
          )}
        </section>
      </main>
      <button type="button" disabled={isReloading} onClick={simulateReload}>
        Reload feed
      </button>
      <footer>Some service (2023)</footer>
    </>
  );
};

export default App;
