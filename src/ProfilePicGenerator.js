import React, { Component } from "react";
// import html2Canvas from "html2canvas";

class ProfilePicGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: null,
    };
  }

  componentDidMount() {
    this.generateProfileImage();
  }

  generateProfileImage() {
    const { name } = this.props;

    const words = name.split(" ");
    const firstNameInitial = words[0] ? words[0][0] : "";
    const lastNameInitial = words[1] ? words[1][0] : "";

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 200;
    canvas.height = 200;
    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "pink";
    context.font = "48px Inter";
    context.textAlign = "center";
    context.textBaseline = "middle";

    //Center everything
    context.fillText(
      firstNameInitial + lastNameInitial,
      canvas.width / 2,
      canvas.height / 2
    );

    const borderRadius = 100;
    context.beginPath();
    context.arc(
      canvas.width / 2,
      canvas.height / 2,
      borderRadius,
      0,
      Math.PI * 2
    );
    context.clip();

    const imageSrc = canvas.toDataURL("image/png");
    this.setState({ imageSrc });

    canvas.toBlob((blob) => {
      const imageSrc = URL.createObjectURL(blob);
      this.setState({ imageSrc });
    }, "image/png");
  }

  render() {
    const { imageSrc } = this.state;

    return (
      <div>
        {imageSrc && (
          <img src={imageSrc} alt="Profile" style={{ borderRadius: "50%" }} />
        )}
      </div>
    );
  }
}

export default ProfilePicGenerator;
