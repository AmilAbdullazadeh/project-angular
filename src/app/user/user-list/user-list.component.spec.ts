import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserListComponent } from "./user-list.component";
import { HttpClientModule } from "@angular/common/http";
import { By } from "@angular/platform-browser";

describe("UserListComponent", () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h1 tag", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "Kullanıcı Listesi"
    );
  });

  it("should render title in a h3 tag for empty list", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toContain(
      "Kullanıcı Listesi Boş"
    );
  });

  it("should increase user list items", () => {
    const button = fixture.debugElement.query(By.css(".add-button"));
    button.triggerEventHandler("click", null);
    fixture.detectChanges();

    const listItem = fixture.debugElement.queryAll(By.css(".user-list-item"));

    expect(listItem.length).toEqual(1);
  });

  it("should increase user list items for 3 times", () => {
    const button = fixture.debugElement.query(By.css(".add-button"));

    for (let kp = 0; kp < 3; kp++) {
      button.triggerEventHandler("click", null);
    }
    fixture.detectChanges();

    const listItem = fixture.debugElement.queryAll(By.css(".user-list-item"));

    expect(listItem.length).toEqual(3);
  });
});
