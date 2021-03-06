import React, { Fragment } from 'react'

export default function Expertise() {

  return (
    <Fragment>
      <div id='expertise' className='nav-space'>
      </div>
      {/* <div className='info_layout_css'>


        <div className='text_img_container'>
          <h3>تخصص ها</h3>
          <hr />
          <p className='glowIn_text_expertise'></p>

        </div>
        <img id='img_expertise' src='./IMG/img_design/expertise_img.png' />
      </div> */}
      <section className='Card'>
        <div className='Card-container' >
          <div className='Card-text'>
            <h3>تکنولوژی های آموزش دیده</h3>
          </div>
          <div className='Card-expertise'>
            <div className='Card-body'>
              <div className='Card-expertise-html vc'>
                <span>HTML</span>
                <img src='./IMG/logo_lessen/html.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div id='Card-expertise-css1' className='Card-expertise-css vc'>
                <span>CSS</span>
                <img src='./IMG/logo_lessen/css.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-javascript'>
                <span>JAVASCTIPT</span>
                <img src='./IMG/logo_lessen/javascript.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-bootstrap'>
                <span>BOOTSTRAP</span>
                <img src='./IMG/logo_lessen/bootstrap.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-jquery'>
                <span>JQUERY</span>
                <img src='./IMG/logo_lessen/jquery.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-sass'>
                <span>SASS</span>
                <img src='./IMG/logo_lessen/sass.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-react'>
                <span>REACT</span>
                <img src='./IMG/logo_lessen/react.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-redux'>
                <span>REDUX</span>
                <img src='./IMG/logo_lessen/redux.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-git'>
                <span>GIT</span>
                <img src='./IMG/logo_lessen/git.svg' />
              </div>
            </div>
            <div className='Card-body'>
              <div className='Card-expertise-sharp'>
                <span>C#</span>
                <img src='./IMG/logo_lessen/c_sharp.svg' />
              </div>
            </div>
          </div>
        </div>
      </section>

    </Fragment>
  )
}