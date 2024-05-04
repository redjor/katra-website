export default function getFirstParagraph(post: any) {
  const getSliceWithText = post.data.body.filter((slice: any) => {
    return (
      slice.slice_type === "text_block" || slice.slice_type === "rich_text"
    );
  });

  const getSliceTextWithParagraph = getSliceWithText.find((slice: any) => {
    return slice.primary.content.find((el: any) => el.type === "paragraph");
  });

  const getFirstParagraph = getSliceTextWithParagraph?.primary.content.find(
    (content: any) => content.type === "paragraph",
  );

  return getFirstParagraph?.text;
}
