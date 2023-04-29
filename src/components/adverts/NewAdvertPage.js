import { memo, useCallback, useMemo, useState, useEffect } from 'react';
import Layout from '../layout/Layout';
import Button from '../shared/Button';


import './NewAdvertPage.css';
import { createAdvert, getTags } from './service';
import { useNavigate } from 'react-router-dom';


const MIN_CHARACTERS = 5;
const MAX_CHARACTERS = 140;


//--------------revisar despues si utilizarlo 
const fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

const HeavyComponent = ({ value }) => {
  const result = fib(value);

  return (
    <div>
      Fibonacci({value}) = {result}
    </div>
  );
};
const MemoizedHeavyComponent = memo(HeavyComponent);
//------end------revisar despues si utilizarlo  incluye quitar memorized abajo del form--linea 88--

const NewAdvertPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [sale, setSale] = useState(false);
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState(null);
  const [obtainTags, setObtainTags] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const tags = await getTags();
      console.log(tags);
      setObtainTags(tags);
    }
      fetchData();
    }, []);


  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSaleChange = (event) => {
    setSale(event.target.value === 'true');
  };

  const handleTagsChange = (event) => {
    const selectedTags = Array.from(event.target.selectedOptions, (option) => option.value);
    setTags(selectedTags);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file || '');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('name', name);
      formData.append('sale', sale);
      formData.append('tags', tags);
      formData.append('price', price);
      formData.append('photo', photo);
      const advert = await createAdvert(formData);
      
      setIsLoading(false);
      navigate(`/adverts/${advert.id}`);
    } catch (error) {
      if (error.status === 401) {
        navigate('/login');
      }
    }
  };

  const isDisabled = isLoading || name.length < MIN_CHARACTERS;
  const characters = `${name.length} / ${MAX_CHARACTERS} characters`;

  const objProperty = useMemo(() => {
    return { isLoading };
  }, [isLoading]);

  const funcProperty = useCallback(() => {
    console.log('isLoading', isLoading);
  }, [isLoading]);

  ///-----end-----------MEMO REVISAR

  return (
    <Layout title="Crea tu anuncio">
      <div className="newAdvertPage bordered">
        <div className="right">
          <form onSubmit={handleSubmit}>
            
          <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>

      <br />
      <label>
        Compra-venta:
        <select value={sale.toString()} onChange={handleSaleChange}>
          <option value="true">Compra</option>
          <option value="false">Venta</option>
        </select>
      </label>
      <br />
  <label>
    Tags:
    <select multiple value={tags} onChange={handleTagsChange}>
    {obtainTags.map((tag) => (
          <option value={tag}>
            {tag}
        </option>
      ))}
    </select>
  </label>
<br />
      <br />
      <label>
        Precio:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>
      <br />
      <label>
        Foto:
        <input type="file" name="photo" onChange={handlePhotoChange} />
      </label>
      <br />

            <div className="newAdvertPage-footer">
            <span className="newAdvertPage-characters">{characters}</span>
              <Button
                type="submit"
                className="newAdvertPage-submit"
                variant="primary"
                disabled={isDisabled}
              >
                Let's go!
              </Button>
            </div>
          </form>
          <MemoizedHeavyComponent
            value={37}
            objProperty={objProperty}
            funcProperty={funcProperty}
          />
        </div>
      </div>
    </Layout>
  );
};

export default NewAdvertPage;