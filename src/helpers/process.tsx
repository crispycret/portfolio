

/**
 * Process a string to be used as a slugified name
 * @param name
 * @returns string
 * @example
 * process_name("React") // "react"
 * process_name("React JS") // "react-js"
 * */
export const process_name = (name: string) => {
    return name.toLowerCase().replace(" ", "-");
}


/**
 * Compare two strings after processing them with process_name
 * @param name1 
 * @param name2 
 * @returns boolean
 * @example
 * process_name_cmp("React", "react") // true
 * process_name_cmp("React", "reactjs") // false
 * */
export const process_name_cmp = (name1: string, name2: string) => {
    return process_name(name1) === process_name(name2);
}