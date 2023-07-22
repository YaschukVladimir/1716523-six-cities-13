
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import { ratingCount } from '../../utils/utils';

type PlaceCardProps ={
  offer: Offer;
  activeCard: string | null;
  setActiveCard: React.Dispatch<React.SetStateAction<string | null>>;
}

function PlaceCard({offer, activeCard, setActiveCard}: PlaceCardProps) : React.JSX.Element {


  const handleMouseEnter = () => {
    setActiveCard(offer.id);
  };

  const handleMouseLeave = () => (
    setActiveCard(null)
  );

  return(
    <article className={`cities__card place-card ${activeCard === offer.id ? 'place-card--active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offers/:${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : '' } button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingCount(offer.rating)} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
