import {message, danger} from "danger"

message(`Changed ${danger.git.modified_files.length} files in this PR`)