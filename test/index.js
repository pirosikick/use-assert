import test from "ava";
import {replace} from "../lib";

test("foo.should.be.a('string');", t => {
  t.ok(replace("foo.should.be.a('string');") === "foo.should.be.a('string');");
});

