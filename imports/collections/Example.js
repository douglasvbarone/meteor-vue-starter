import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";

export const Example = new Mongo.Collection('example')

Meteor.methods({
    'example.insert'(text) {

        if (text) {
            Example.insert({text})
        } else {
            throw new Meteor.Error('400', 'Text empty')
        }

        return text
    },
    'example.remove'(_id){
        Example.remove(_id)
    },
    'example.removeAll'(){
        Example.remove({})
    }
})