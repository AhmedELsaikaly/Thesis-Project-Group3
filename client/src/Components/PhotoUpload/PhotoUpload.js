//import used technologies
import React from "react";

//import CSS

//import used files

//create PhotoUpload Compo
class PhotoUpload extends React.Component {
  state = {
    imageUrl: null,
    imageAlt: null,
  };
  handleChange = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "xfaaoapt");
    const options = {
      method: "POST",
      body: formData,
    };
    return fetch(
      "https://api.Cloudinary.com/v1_1/dplbducwt/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.props.handler(res.secure_url);
        this.setState({
          imageUrl: res.secure_url,
          imageAlt: `An image of ${res.original_filename}`,
        });
      })
      .catch((err) => console.log(err));
  };

  //render PhotoUpload Compo
  render() {
    const { imageUrl, imageAlt } = this.state;

    return (
      <main className="Upload">
        <section className="left-side">
          <form>
            <div className="form-group">
              {/* <label for="inputsm">Your Uploaded Photo:</label> */}
              <label for="inputsm">Upload Photo:</label>
              <br />
              <input
                type="file"
                // style={{ width: "200px" }}
                accept="image/*"
                onChange={this.handleChange}
              />
            </div>
          </form>
          {imageUrl && (
            <a href={imageUrl}>
              <img
                style={{ width: "250px", height: "250px" }}
                src={imageUrl}
                alt={imageAlt}
                className="displayed-image"
              />
            </a>
          )}
        </section>
      </main>
    );
  }
}
//export compo
export default PhotoUpload;

//Check and vaildate
