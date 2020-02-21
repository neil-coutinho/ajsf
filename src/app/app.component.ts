import { Component, ViewChild } from "@angular/core";
import {
  JsonSchemaFormComponent,
  WidgetLibraryService,
  NoneComponent,
  SectionComponent,
  AddReferenceComponent
} from "@ajsf/core";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("form", { static: true }) form: JsonSchemaFormComponent;
  name = "Angular";

  options = {
    loadExternalAssets: true,
    disableInvalidSubmit: false
  };

  schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    title: "Product Variant",
    additionalProperties: false,
    definitions: {
      int: {
        type: "number",
        minimum: 0,
        maximum: 10
      },
      string: {
        type: "string",
        minLength: 0
      },
      valueItem: {
        type: "object",
        properties: { value: { $ref: "#/definitions/int" } }
      },
      valueItemArray: {
        type: "array",
        items: { $ref: "#/definitions/valueItemArray" }
      },
      dtoArray: {
        type: "array",
        items: { $ref: "#/definitions/staffLanguageLevelDto" }
      },
      staffLanguageLevelDto: {
        type: "object",
        properties: {
          id: { $ref: "#/definitions/int" },
          staffId: {
            allOf: [
              { $ref: "#/definitions/int" },
              { maximum: 5, title: "staffId (overriden maximum)" }
            ]
          },
          languageId: {
            allOf: [
              { $ref: "#/definitions/valueItem" },
              { title: "languageId (object with custom title)" }
            ]
          },
          languageLevelId: { $ref: "#/definitions/int" },
          languageName2: {
            allOf: [
              { $ref: "#/definitions/string" },
              {
                default: "ole",
                maxLength: 3,
                title: "languageName2 (custom default & maxLength)"
              }
            ]
          },
          languageLevelName: { $ref: "#/definitions/dtoArray" }
        }
      }
    },
    properties: {
      staffLanguageLevelDto: { $ref: "#/definitions/staffLanguageLevelDto" }
    }
  };

  layout = [
    {
      items: [
        {
          title: "OBJECT MISSING TITLE",
          type: "section",
          key: "staffLanguageLevelDto",
          display: "flex",
          "flex-flow": "row wrap",
          flex: "1 100%",
          items: [
            {
              items: [
                {
                  title: "NUMBER MISSING TITLE",
                  type: "number",
                  key: "staffLanguageLevelDto.id",
                  htmlClass: "max-400"
                }
              ],
              type: "section",
              flex: "1 1 100%"
            },
            {
              items: [
                {
                  title: "NUMBER MISSING TITLE",
                  type: "number",
                  key: "staffLanguageLevelDto.languageLevelId",
                  htmlClass: "max-400"
                }
              ],
              type: "section",
              flex: "1 1 100%"
            },
            {
                  title: "ARRAY MISSING TITLE",
                  key: "staffLanguageLevelDto.languageLevelName",
                  
                  items: [
                    {
                       key: "staffLanguageLevelDto.languageLevelName[]",
                       items: [
                         {
                          title: "NUMBER MISSING TITLE",
                          type: "number",
                          key: "staffLanguageLevelDto.languageLevelName[].id",
                              
                        }
                       ]
                    }
                  
                  ]
                
                }
          ]
        }
      ],
      type: "section"
    }
  ];

  showFormSchemaFn($event) {}

  showFormLayoutFn($event) {
    console.log($event)
  }

  onSubmit($event) {}
}
