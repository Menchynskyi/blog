import { useState, ChangeEvent, useEffect } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage } from '../../../components';
import {
  NewPostContainer,
  TitleField,
  BodyField,
  SumbitButton,
  FormStyled,
} from '../../../styles';
import { createNewPost, resetCreatedPost } from '../../../actions';
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
  const [values, setValues] = useState<FormValues>(initialFormValues);

  const dispatch = useDispatch();
  const { error, isCreated } = useSelector(({ posts }: RootState) => {
    return {
      error: posts.createdPostError,
      isCreated: posts.createdPostSuccesfull,
    };
  });

  useEffect(() => {
    return () => {
      dispatch(resetCreatedPost());
    };
  }, []);

  if (error) return <ErrorMessage>Oops.</ErrorMessage>;
  if (isCreated) {
    Router.push('/');
  }

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

  const isDisabled = !values.body || !values.title;

  return (
    <NewPostContainer>
      <FormStyled onSubmit={handleSubmit}>
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
          rows={16}
        />
        <SumbitButton disabled={isDisabled} type="submit">
          Create post
        </SumbitButton>
      </FormStyled>
    </NewPostContainer>
  );
};

export default NewPost;
