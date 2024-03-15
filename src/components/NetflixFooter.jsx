import "bootstrap/dist/css/bootstrap.min.css";
const NetflixFooter = () => {
  return (
    <footer>
      <div className="container mt-5">
        <div className="row gap-3">
          <div className="col-12 d-flex gap-2">
            <img src="facebook.svg" alt="facebook" />
            <img src="instagram.svg" alt="instagram" />
            <img src="twitterx.svg" alt="twitter" />
            <img src="youtube.svg" alt="youtube" />
          </div>
          <div className="col-12">
            <div className="row flex-row">
              <div className="col-3">
                <ul className="text">
                  <li className="p-1">Audio and Subtitles</li>
                  <li className="p-1">Media Center</li>
                  <li className="p-1">Privacy</li>
                  <li className="p-1">Contact us</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="text">
                  <li className="p-1">Audio Description</li>
                  <li className="p-1">Investor Relations</li>
                  <li className="p-1">Legal Notices</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="text">
                  <li className="p-1">Help Center</li>
                  <li className="p-1">Jobs</li>
                  <li className="p-1">Coockie Preferences</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="text">
                  <li className="p-1">Gift Cards</li>
                  <li className="p-1">Terms of Use</li>
                  <li className="p-1">Corporate Information</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <a href="#btn">Service Code</a>
          </div>
          <div className="col-12">
            <p>&#169; 1997-2019 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default NetflixFooter;
