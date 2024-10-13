import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitErrorHandler<FieldValues>;
};

const JSForm = ({ children, onSubmit }: TFormProps) => {
  const methods = useForm();
  const { handleSubmit, reset } = methods;
  const submit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log(data);
    onSubmit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default JSForm;
