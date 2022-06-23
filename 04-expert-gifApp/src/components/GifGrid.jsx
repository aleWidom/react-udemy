import PropTypes from 'prop-types';
import { GifGridItem } from '.';
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {

  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 aria-label='title'>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {images.map((e) => (
          <GifGridItem key={e.id} {...e}
          //otra forma de crear las props en vez de ponerlo como argumento con un nombre mando un objeto, antes mandaba por ej data={e}, entonces cuando lo utilizaba tenía que desetructurar el elemento o llamar las props con lo que traía dentro por separado, ahora de esta manera desestructuro cada propiedad y listo.
          />
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
