import React from "react";
import '../style.scss';

function ProgressBar(){

        return (
          <>
            <div class="container">
              <div class="loading-bar">
                <div class="loading-bar--progress">
                  <span class="first"></span>
                </div>
              </div>
            </div>
          </>
        );

}
export default ProgressBar;