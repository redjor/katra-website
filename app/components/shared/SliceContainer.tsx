import Container from "@/app/components/layout/Container";
import Row from "@/app/components/layout/Row";
import { ReactNode } from "react";

export default function SliceContainer<T>({
  children,
  fullwidth,
  sliceName,
  space,
  maxWidth,
  bgColor,
  marginPreview, // Added marginPreview to the parameter list
}: {
  children: ReactNode;
  fullwidth: boolean;
  sliceName: string;
  space: string;
  maxWidth: string;
  bgColor: string;
  marginPreview?: string; // Made marginPreview optional
}) {
  function spaceClass() {
    switch (space) {
      case "normal":
        return "py-8 md:py-12";
      case "none":
        return "py-0";
      case "xlarge":
        return "py-24";
      case "large":
        return "py-16";
      case "small":
        return "py-6";
      case "xsmall":
        return "py-3";
      default:
        return "py-8 md:py-12";
    }
  }

  function maxWidthClass() {
    switch (maxWidth) {
      case "full":
        return "";
      case "normal":
        return "max-w-4xl";
      case "xlarge":
        return "max-w-7xl";
      case "large":
        return "max-w-5xl";
      case "small":
        return "max-w-2xl";
      case "xsmall":
        return "max-w-xl";
      default:
        return "max-w-4xl";
    }
  }

  function projectStyle() {
    return {
      backgroundColor: bgColor,
      border: `1px solid ${bgColor}`,
    };
  }

  return (
    <section
      className={`relative transition-all duration-200 ${sliceName} ${
        fullwidth ? "z-[6]" : "slice-container-block"
      }`}
      style={projectStyle()}
    >
      <Container>
        <Row
          fullscreen={fullwidth}
          className={`mx-auto ${maxWidthClass()} ${
            marginPreview ? marginPreview : spaceClass()
          }`}
        >
          {children}
        </Row>
      </Container>
    </section>
  );
}
