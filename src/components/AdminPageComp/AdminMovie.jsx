const AdminMovie = () => {
  return (
    <div>
      <div className="admin__movie">
              <div className="admin__movie__header">
                <h3>Movie 1</h3>
                <button className="admin__movie__edit__button">Edit</button>
              </div>
              <div className="admin__movie__rows">
                <div className="admin__movie__row">
                  <div className="admin__movie__info">
                    <span>Genre</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Rating</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Category</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Image-URL</span>
                    <span>.....</span>
                  </div>
                </div>
                <div className="admin__movie__row">
                  <div className="admin__movie__info">
                    <span>Cast</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Director</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Producer</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Trailer-URL</span>
                    <span>.....</span>
                  </div>
                </div>
                <div className="admin__movie__row">
                  <div className="admin__movie__info">
                    <span>Date</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Time</span>
                    <span>.....</span>
                  </div>
                  <div className="admin__movie__info">
                    <span>Sypnopsis</span>
                    <span>.....</span>
                  </div>
                </div>
                <i className="material-symbols-outlined admin__movie__trash">delete</i>
              </div>
            </div>
    </div>
  )
}

export default AdminMovie
