import { useState, ChangeEvent } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../../components';
import {
  NewPostContainer,
  TitleField,
  BodyField,
  SumbitButton,
} from '../../../styles';

type FormValues = {
  title: string;
  body: string;
};

const initialFormValues: FormValues = {
  title: '',
  body: '',
};

const NewPost: NextPage = () => {
  const [values, setValues] = useState<FormValues>(initialFormValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValues(prev => ({ ...prev, title: value }));
  };

  const handleBodyChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValues(prev => ({ ...prev, body: value }));
  };

  return (
    <Layout>
      <NewPostContainer>
        <form onSubmit={handleSubmit}>
          <TitleField
            value={values.title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <BodyField
            value={values.body}
            onChange={handleBodyChange}
            placeholder="What do you want to tell"
            rows={8}
          />
          <SumbitButton type="submit">Create post</SumbitButton>
        </form>
      </NewPostContainer>
    </Layout>
  );
};

export default NewPost;
