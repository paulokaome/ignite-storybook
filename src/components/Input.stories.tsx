import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { TextInput, TextInputRootProps } from "./Input";

export default {
  title: "Components/Input",
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.InputIcon>
          <Envelope size={32} />
        </TextInput.InputIcon>
        ,
        <TextInput.Input placeholder="Type your email" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const NoIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your email" />,
  },
};
