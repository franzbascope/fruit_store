export default (props) => {
  return (
    <div>
      <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <p class="h5 my-0 me-md-auto fw-normal">Amazon</p>
      </header>
      <main class="container">
        {props.children}
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
          <div class="row">
            <div class="col-12 col-md">
              <img
                class="mb-2"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
                alt=""
                width="120"
              />
              <small class="d-block mb-3 text-muted">© 2017-2020</small>
            </div>
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Random feature
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Team feature
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Another one
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Resource
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Resource name
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Another resource
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li>
                  <a class="link-secondary" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Locations
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a class="link-secondary" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
