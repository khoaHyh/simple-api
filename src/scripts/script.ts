export class FooBar {
  content: string[];

  constructor({ content }: { content: string[] }) {
    this.content = content ?? [];
  }

  fooBar(): string {
    let response = "foo bar";
    if (this.content.length == 0) {
      return response;
    }
    response = this.content.join(" ");
    console.log(response);
    return response;
  }
}

export const FooBarInstance = new FooBar({ content: ["blah", "boo"] });
FooBarInstance.fooBar();
