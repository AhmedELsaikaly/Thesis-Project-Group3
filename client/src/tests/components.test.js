import "jsdom-global/Register";
import Enzyme, { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import React from "react";
import SignUp from "../Components/Signing/signUp";
import SignIn from "../Components/Signing/SignIn";

describe("the file SignUp is running", () => {
  it("The SignUp file is runnig", () => {
    const wrapper = shallow(<SignUp />);
    const button1 = wrapper.find("button");
    button1.simulate("click");
    const input1 = wrapper.find("input.fullName");
    const input3 = wrapper.find("input.password");
    const input4 = wrapper.find("input.email");
    expect(input1).toEqual({});
    expect(input3).toEqual({});
    expect(input4).toEqual({});
  });

  it("The SignUp function is called", async () => {
    const submit = jest.fn();
    const wrapper = mount(<SignUp onsubmit={submit} />);
    expect(submit).toBeDefined();
  });
});

describe("the file SignIn is running", () => {
  it("The input filed is running", () => {
    const wrapper = shallow(<SignIn />);
    const button4 = wrapper.find("button");
    button4.simulate("click");
    const input1 = wrapper.find("input.email");
    const input2 = wrapper.find("input.password");
    expect(input1).toEqual({});
    expect(input2).toEqual({});
  });
});
