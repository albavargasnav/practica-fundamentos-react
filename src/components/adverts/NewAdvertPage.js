import Layout from '../layout/Layout';
import Button from '../shared/Button';
import Photo from '../shared/Photo';
import Textarea from '../shared/Textarea';

import './NewAdvertPage.css';

const NewAdvertPage = () => {
  return (
    <Layout title="What are you thinking?">
      <div className="newAdvertPage bordered">
        <div className="left">
          <Photo />
        </div>
        <div className="right">
          <form>
            <Textarea
              className="newAdvertPage-textarea"
              placeholder="Hey! What's up!"
            />
            <div className="newAdvertPage-footer">
              <span className="newAdvertPage-characters">...characters</span>
              <Button
                type="submit"
                className="newAdvertPage-submit"
                variant="primary"
              >
                Let's go!
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default NewAdvertPage;