import { useState, useMemo, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";
import styles from "./y-t-search-bar.module.css";
import { useRouter } from "next/router";

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
  onClick
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter();

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
  const handleSearchClick =  useCallback(() => {
    if (onClick) {
      onClick(searchValue)
    } else {
      router.push({
        pathname: '/search-results',
        query: { 
          searchTerm: searchValue
        },
      });
    }
  }, [router, searchValue])
  const goToMain = () => {
    router.push({
      pathname: '/',
    })
  }
  return (
    <>
      <nav className={styles.ytdMasthead}>
        <div className={styles.divstart}>
          <button className={styles.ytIconButton} onClick={openMenu}>
            <img className={styles.svgIcon} alt="" src={svg} />
          </button>
          <div className={styles.ytdTopbarLogoRenderer} onClick={goToMain}>
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
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  // Call your onEnter function here
                  console.log('Enter key pressed');
                  // For example, if you want to execute a search when Enter is pressed:
                  handleSearchClick();
                }
              }}
            />
            <button className={styles.search} onClick={handleSearchClick}>
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
