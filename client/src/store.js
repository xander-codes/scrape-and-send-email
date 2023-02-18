import {atom} from "jotai";
import {getAllProducts} from "./dbActions";

export let SITES = atom(getAllProducts())

