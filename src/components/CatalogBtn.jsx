import { useRecoilValue } from 'recoil'
import { languageState } from "../data/recoil"

const CatalogButton = () => {
  const lang = useRecoilValue(languageState)

  const openPdf = () => {
    window.open('/files/catalog.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <button class="open-pdf-btn" onClick={openPdf}>
      <div class="fade-button">
                                <div class="icon-group">
                                    <div class="icon-ring">
                                        <div class="icon-gradient"></div>
                                    </div>

                                    <div class="icon">
                                        <svg width="6" height="13" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 0L3 9" stroke="currentColor"></path>
<path d="M3 10L0 7H6L3 10Z" fill="currentColor"></path>
<line y1="12.5" x2="6" y2="12.5" stroke="currentColor"></line>
</svg>

                                    </div>
                                </div>
                            </div>
      {lang.openCatalog}
    </button>
  );
};

export default CatalogButton;
