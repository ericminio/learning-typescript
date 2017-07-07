import { suite, test } from "mocha-typescript";
import 'mocha';
import { expect } from 'chai';

@suite class Mocha {
    @test isReady() {
        expect(1).to.equal(1);
    }
}
