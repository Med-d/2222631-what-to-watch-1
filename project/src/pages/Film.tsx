import React from 'react';
import {VisuallyHidden} from '../components/VisuallyHidden';
import {Header} from '../components/Header';
import {FilmCard} from '../components/FilmCard';
import {Footer} from '../components/Footer';
import {useParams} from 'react-router-dom';


export function Film(){
  const params = useParams();
  const id: number = +(params?.id ?? '-1');
  const film = window.FilmsList[id - 1];
  return(
    <React.Fragment>
      <VisuallyHidden/>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={'img/bg-the-grand-budapest-hotel.jpg'} alt='The Grand Budapest Hotel'/>
          </div>

          <h1 className='visually-hidden'>WTW</h1>

          <Header/>

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>The Grand Budapest Hotel</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>Drama</span>
                <span className='film-card__year'>2014</span>
              </p>

              <div className='film-card__buttons'>
                <button className='btn btn--play film-card__button' type='button'>
                  <svg viewBox='0 0 19 19' width='19' height='19'>
                    <use xlinkHref='#play-s'></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className='btn btn--list film-card__button' type='button'>
                  <svg viewBox='0 0 19 20' width='19' height='20'>
                    <use xlinkHref='#add'></use>
                  </svg>
                  <span>My list</span>
                  <span className='film-card__count'>9</span>
                </button>
                <a href={'add-review.html'} className='btn film-card__button'>Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img
                src={'img/the-grand-budapest-hotel-poster.jpg'}
                alt={film.title} width='218'
                height='327'
              />
            </div>

            <div className='film-card__desc'>
              <nav className='film-nav film-card__nav'>
                <ul className='film-nav__list'>
                  <li className='film-nav__item film-nav__item--active'>
                    <a href='#' className='film-nav__link'>Overview</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Details</a>
                  </li>
                  <li className='film-nav__item'>
                    <a href='#' className='film-nav__link'>Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className='film-rating'>
                <div className='film-rating__score'>8,9</div>
                <p className='film-rating__meta'>
                  <span className='film-rating__level'>Very good</span>
                  <span className='film-rating__count'>240 ratings</span>
                </p>
              </div>

              <div className='film-card__text'>
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave{'&apos'}s friend and protege.
                </p>

                <p>Gustave prides himself on providing first-class service to the hotel{'&apos'}s guests, including satisfying
                  the sexual needs of the many elderly women who stay there. When one of Gustave{'&apos'}s lovers dies
                  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                  murder.
                </p>

                <p className='film-card__director'><strong>Director: Wes Anderson</strong></p>

                <p className='film-card__starring'>
                  <strong>
                    Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <div className='catalog__films-list'>
            <FilmCard
              id={film.id}
              title={film.title}
              imgLink={film.imgLink}
            />
          </div>
        </section>

        <Footer/>
      </div>
    </React.Fragment>
  );
}
