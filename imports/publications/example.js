import { Meteor } from 'meteor/meteor'
import {Example} from "../collections/Example";

Meteor.publish('examples', ()=>Example.find({}))

