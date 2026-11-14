package de.nils.finaro;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.resttestclient.autoconfigure.AutoConfigureRestTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.test.web.servlet.client.RestTestClient;
import org.testcontainers.postgresql.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureRestTestClient
@Testcontainers
class FinaroApplicationTests {

  @Container
  @ServiceConnection
  static PostgreSQLContainer postgres = new PostgreSQLContainer("postgres:18-alpine");

  @Autowired
  RestTestClient client;

  @Test
  void contextLoads() {}

  @Test
  void healthEndpointIsUp() {
    client.get().uri("/actuator/health").exchange().expectBody().jsonPath("status").isEqualTo("UP");
  }

  @Test
  void swaggerUiIsReachable() {
    client.get().uri("/swagger-ui/index.html").exchange().expectStatus().isOk();
  }
}
