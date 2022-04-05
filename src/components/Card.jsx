const Card = ({ vacation }) => {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl
  } = vacation;

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card--location_image" />
      <div className="card--content">
        <span className="card--content--country">
          <i class="fa-solid fa-location-dot"></i>
          {location.toUpperCase()}
          <a href={googleMapsUrl}>View on Google Maps</a>
        </span>
        <h2>{title}</h2>
        <span className="card--date">
          {startDate} - {endDate}
        </span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
