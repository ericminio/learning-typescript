import { suite, test } from "mocha-typescript";
import 'mocha';
import { expect } from 'chai';
import { ResourceLoader } from '@angular/compiler';

@suite class Mocha {
    @test isReady() {
        expect(1).to.equal(1);
    }
}

@suite class resourceLoader {
    @test isKnown() {
      expect(ResourceLoader).not.to.equal(null);
      expect(ResourceLoader).not.to.equal(undefined);
    }
}
