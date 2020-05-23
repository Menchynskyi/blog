import { useState, ChangeEvent } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, ErrorMessage } from '../../../components';
import {
  NewPostContainer,
  TitleField,
  BodyField,
  SumbitButton,
} from '../../../styles';
import { createNewPost } from '../../../actions';
import { RootState } from '../../../reducers';

type FormValues = {
  title: string;
  body: string;
};

const initialFormValues: FormValues = {
  title: '',
  body: '',
};

const NewPost: NextPage = () => {
  const dispatch = useDispatch();
  const { error, loading, isCreated } = useSelector(({ posts }: RootState) => {
    return {
      error: posts.createdPostError,
      loading: posts.createdPostLoading,
      isCreated: posts.createdPostSuccesfull,
    };
  });

  const [values, setValues] = useState<FormValues>(initialFormValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (values.title.trim() && values.body.trim()) {
      dispatch(createNewPost(values));
    }
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  if (error) return <ErrorMessage>Oops.</ErrorMessage>;
  if (isCreated) {
    Router.push('/');
  }

  return (
    <Layout>
      <NewPostContainer>
        <form onSubmit={handleSubmit}>
          <TitleField
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <BodyField
            name="body"
            value={values.body}
            onChange={handleChange}
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
