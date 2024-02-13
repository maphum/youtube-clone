import { useState, useMemo, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";
import styles from "./y-t-search-bar.module.css";

const YTSearchBar = ({
  onSearchClick,
  svg,
  svg1,
  divcontainerColor,
  svg2,
  divvoiceSearchButton,
  vector,
  ytIconButton,
  svg3,
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const divcontainerStyle = useMemo(() => {
    return {
      color: divcontainerColor,
    };
  }, [divcontainerColor]);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <nav className={styles.ytdMasthead}>
        <div className={styles.divstart}>
          <button className={styles.ytIconButton} onClick={openMenu}>
            <img className={styles.svgIcon} alt="" src={svg} />
          </button>
          <div className={styles.ytdTopbarLogoRenderer}>
            <img className={styles.svgIcon1} alt="" src={svg1} />
          </div>
        </div>
        <div className={styles.divcenter}>
          <div className={styles.ytdSearchbox}>
            <input
              className={styles.divcontainer}
              placeholder="Search"
              type="text"
              style={divcontainerStyle}
            />
            <button className={styles.search} onClick={onSearchClick}>
              <img className={styles.svgIcon2} alt="" src={svg2} />
            </button>
          </div>
          <img
            className={styles.divvoiceSearchButtonIcon}
            alt=""
            src={divvoiceSearchButton}
          />
        </div>
        <div className={styles.divbuttons}>
          <button className={styles.svg}>
            <img className={styles.vectorIcon} alt="" src={vector} />
          </button>
          <img className={styles.ytIconButton1} alt="" src={ytIconButton} />
          <div className={styles.a}>
            <img className={styles.svgIcon2} alt="" src={svg3} />
            <div className={styles.div}>
              <div className={styles.signIn}>Sign in</div>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeMenu}>
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default YTSearchBar;
