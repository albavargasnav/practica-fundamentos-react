import { memo, useMemo, useState } from 'react';
import Layout from '../layout/Layout';
import Button from '../shared/Button';
import Photo from '../shared/Photo';
import Textarea from '../shared/Textarea';

import './NewAdvertPage.css';
import { createAdvert } from './service';
import { useNavigate } from 'react-router-dom';

const MIN_CHARACTERS = 5;
const MAX_CHARACTERS = 140;


//--------------revisar despues si utilizarlo 
const fib = function (n) {
  if (n <= 1) return n;

  return fib(n - 1) + fib(n - 2);
};

const HeavyComponent = ({ value }) => {
  const result = useMemo(() => fib(value), [value]);

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

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const advert = await createAdvert({ name });
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

  ///----------------MEMO REVISAR
  // const objProperty = useMemo(() => {
  //   return { isLoading };
  // }, [isLoading]);

    const objProperty = { isLoading };

  ///-----end-----------MEMO REVISAR

  return (
    <Layout title="What are you thinking?">
      <div className="newAdvertPage bordered">
        <div className="left">
          <Photo />
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <Textarea
              name="name"
              className="newAdvertPage-textarea"
              placeholder="Hey! What's up!"
              onChange={handleChange}
              value={name}
              maxLength={MAX_CHARACTERS}
            />
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
          <HeavyComponent value={37} objProperty={objProperty} />
        </div>
      </div>
    </Layout>
  );
};

export default NewAdvertPage;