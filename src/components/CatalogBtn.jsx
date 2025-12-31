import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"

const CatalogButton = ({ hasIcon, text = 'catalog', customClass = '' }) => {
  const lang = useRecoilValue(languageState)

  const openPdf = () => {
    window.open('/files/catalog.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <button className={`open-pdf-btn ${customClass}`} onClick={openPdf}>
      {hasIcon && (
        <div className="fade-button">
          <div className="icon-group">
            <div className="icon-ring">
              <div className="icon-gradient"></div>
            </div>
            <div className="icon">
              <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 0L3 9" stroke="currentColor"></path>
                <path d="M3 10L0 7H6L3 10Z" fill="currentColor"></path>
                <line y1="12.5" x2="6" y2="12.5" stroke="currentColor"></line>
              </svg>
            </div>
          </div>
        </div>
      )}
      {lang[text]}
    </button>
  );
};

export default CatalogButton;
