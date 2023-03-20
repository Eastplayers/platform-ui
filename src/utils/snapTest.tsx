import renderer from "react-test-renderer";
import React from "react";

export interface Config {
  props: object;
  description: string;
}

const singleSnapTest = (tree: any, description: string) => {
  it(description, () => {
    expect(tree).toMatchSnapshot();
  });
};

const testSnapshots = (Component: any, configs: Config[]) => {
  describe("snapshots", () => {
    configs.forEach((config) => {
      const { props, description } = config;

      const tree = renderer.create(<Component {...props} />).toJSON();
      singleSnapTest(tree, description);
    });
  });
};

export { testSnapshots };
