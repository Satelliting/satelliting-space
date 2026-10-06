import Image from "next/image";
import styles from "./BrowserFrame.module.css";

type BrowserFrameProps = {
  src: string;
  alt: string;
  sizes: string;
};

/** Fake browser chrome (window dots) above a 16:10 screenshot. */
export function BrowserFrame({ src, alt, sizes }: BrowserFrameProps) {
  return (
    <div>
      <div className={styles.bar} aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className={styles.media}>
        <Image src={src} alt={alt} fill sizes={sizes} className={styles.image} />
      </div>
    </div>
  );
}
