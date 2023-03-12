import { Flex, FlexProps } from "@chakra-ui/react";
import {
  BoldButton,
  ListButton,
  HeadingButton,
  ImageButton,
  ItalicButton,
  StrikeButton,
  UnderlineButton,
  BlockQuoteButton,
  CodeBlockButton,
  HardBreakButton,
  HorizontalLineButton,
  SubscriptButton,
  SuperscriptButton,
  ClearFormatsButton,
  ClearContentsButton,
  RedoButton,
  UndoButton,
  FontColorButton,
  HighlightColorButton,
  YoutubeButton,
  FontFamilyButton,
  TextAlignButton,
  TableButton,
  LinkInlineButton,
  LinkButton,
  DeleteTableButton,
  InsertRowBelowButton,
  InsertRowAboveButton,
  InsertColumnRightButton,
  InsertColumnLeftButton,
  DeleteColumnButton,
  DeleteRowButton,
  MergeCellsButton,
  SplitCellButton,
  ClearLinkButton,
  BulletListButton,
  NumberedListButton,
  SinkListButton,
  LiftListButton,
  LeftAlignButton,
  RightAlignButton,
  CenterAlignButton,
  JustifyTextButton,
  FontSizeButton,
  IncreaseIndentButton,
  DecreaseIndentButton,
  VideoButton,
} from "@chakra-editor/buttons";
import {
  WithEditor,
  ToolbarProps,
  ButtonList,
  ButtonNodes,
  Buttons,
} from "@chakra-editor/types";
import React, { FC, isValidElement } from "react";
import { Loader } from "@chakra-editor/components";

export const Toolbar: FC<ToolbarProps & FlexProps & WithEditor> = ({
  editor,
  buttons,
  buttonProps,
  fallback,
  ...toolbarStyles
}) => {
  if (!buttons?.length) return fallback ? <>{fallback}</> : <Loader />;

  return (
    <Flex {...toolbarStyles}>
      {buttons.map((val, index) => (
        <RenderButtons
          editor={editor}
          val={val}
          buttonProps={buttonProps}
          key={index}
        />
      ))}
    </Flex>
  );
};

const RenderButtons: FC<
  {
    val: Buttons[0];
    buttonProps?: ButtonNodes;
  } & WithEditor
> = ({ val, buttonProps, editor }) => {
  if (Array.isArray(val)) {
    const groupStyle = val.find(
      (val) => !isValidElement(val) && typeof val !== "string"
    );

    return (
      <Flex
        flexWrap="wrap"
        border="1px"
        borderColor="gray.200"
        rounded="lg"
        gap={1}
        alignItems="center"
        {...buttonProps?.globalGroupProps}
        {...groupStyle}
      >
        {val.flatMap((button, index) => {
          return (
            <RenderButton
              button={button as ButtonList}
              editor={editor}
              key={index}
              buttonProps={buttonProps}
            />
          );
        })}
      </Flex>
    );
  }

  return (
    <RenderButton
      button={val as ButtonList}
      editor={editor}
      buttonProps={buttonProps}
    />
  );
};

const RenderButton: FC<
  Pick<ToolbarProps, "buttonProps"> & WithEditor & { button: ButtonList }
> = ({ editor, button, buttonProps }) => {
  switch (button) {
    case "bold":
      return <BoldButton editor={editor} {...buttonProps} />;
    case "heading":
      return <HeadingButton editor={editor} {...buttonProps} />;
    case "linkInline":
      return <LinkInlineButton editor={editor} {...buttonProps} />;
    case "link":
      return <LinkButton editor={editor} {...buttonProps} />;
    case "clearLink":
      return <ClearLinkButton editor={editor} {...buttonProps} />;
    case "image":
      return <ImageButton editor={editor} {...buttonProps} />;
    case "italic":
      return <ItalicButton editor={editor} {...buttonProps} />;
    case "strike":
      return <StrikeButton editor={editor} {...buttonProps} />;
    case "underline":
      return <UnderlineButton editor={editor} {...buttonProps} />;
    case "codeBlock":
      return <CodeBlockButton editor={editor} {...buttonProps} />;
    case "blockquote":
      return <BlockQuoteButton editor={editor} {...buttonProps} />;
    case "hardbreak":
      return <HardBreakButton editor={editor} {...buttonProps} />;
    case "horizontalline":
      return <HorizontalLineButton editor={editor} {...buttonProps} />;
    case "subscript":
      return <SubscriptButton editor={editor} {...buttonProps} />;
    case "superscript":
      return <SuperscriptButton editor={editor} {...buttonProps} />;
    case "clearformats":
      return <ClearFormatsButton editor={editor} {...buttonProps} />;
    case "clearcontents":
      return <ClearContentsButton editor={editor} {...buttonProps} />;
    case "undo":
      return <UndoButton editor={editor} {...buttonProps} />;
    case "redo":
      return <RedoButton editor={editor} {...buttonProps} />;
    case "fontcolor":
      return <FontColorButton editor={editor} {...buttonProps} />;
    case "highlightcolor":
      return <HighlightColorButton editor={editor} {...buttonProps} />;
    case "youtube":
      return <YoutubeButton editor={editor} {...buttonProps} />;
    case "list":
      return <ListButton editor={editor} {...buttonProps} />;
    case "bulletList":
      return <BulletListButton editor={editor} {...buttonProps} />;
    case "orderedList":
      return <NumberedListButton editor={editor} {...buttonProps} />;
    case "sinkList":
      return <SinkListButton editor={editor} {...buttonProps} />;
    case "liftList":
      return <LiftListButton editor={editor} {...buttonProps} />;
    case "fontfamily":
      return <FontFamilyButton editor={editor} {...buttonProps} />;
    case "textalign":
      return <TextAlignButton editor={editor} {...buttonProps} />;
    case "leftAlign":
      return <LeftAlignButton editor={editor} {...buttonProps} />;
    case "rightAlign":
      return <RightAlignButton editor={editor} {...buttonProps} />;
    case "centerAlign":
      return <CenterAlignButton editor={editor} {...buttonProps} />;
    case "justifyText":
      return <JustifyTextButton editor={editor} {...buttonProps} />;
    case "table":
      return <TableButton {...buttonProps} editor={editor} />;
    case "deleteTable":
      return <DeleteTableButton {...buttonProps} editor={editor} />;
    case "insertRowBelow":
      return <InsertRowBelowButton {...buttonProps} editor={editor} />;
    case "insertRowAbove":
      return <InsertRowAboveButton {...buttonProps} editor={editor} />;
    case "insertColumnRight":
      return <InsertColumnRightButton {...buttonProps} editor={editor} />;
    case "insertColumnLeft":
      return <InsertColumnLeftButton {...buttonProps} editor={editor} />;
    case "deleteColumn":
      return <DeleteColumnButton {...buttonProps} editor={editor} />;
    case "deleteRow":
      return <DeleteRowButton {...buttonProps} editor={editor} />;
    case "mergeCells":
      return <MergeCellsButton {...buttonProps} editor={editor} />;
    case "splitCell":
      return <SplitCellButton {...buttonProps} editor={editor} />;
    case "fontsize":
      return <FontSizeButton {...buttonProps} editor={editor} />;
    case "increaseIndent":
      return <IncreaseIndentButton {...buttonProps} editor={editor} />;
    case "decreaseIndent":
      return <DecreaseIndentButton {...buttonProps} editor={editor} />;
    case "video":
      return <VideoButton {...buttonProps} editor={editor} />;
    default: {
      return (
        <div style={{ display: isValidElement(button) ? "initial" : "none" }}>
          {isValidElement(button) && button}
        </div>
      );
    }
  }
};
