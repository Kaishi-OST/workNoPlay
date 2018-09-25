class Main {
  public static void drawLineOne() {
    System.out.println("All work and no play makes Jack a dull boy.");
  }
  public static void d5() {
    drawLineOne();
    drawLineOne();
    drawLineOne();
    drawLineOne();
    drawLineOne();
  }
  public static void d25() {
    d5();
    d5();
    d5();
    d5();
    d5();
  }
  public static void d100() {
    d25();
    d25();
    d25();
    d25();
  }
  public static void d500() {
    d100();
    d100();
    d100();
    d100();
    d100();
  }
  public static void done() {
    d500();
    d500();
  }
  public static void main(String[] args) {
    done();
  }
}
